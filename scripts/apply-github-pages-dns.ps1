# Points nichemash.com (apex + www) at GitHub Pages for bsc137/nichemash_public.
# Authoritative DNS for nichemash.com lives in Google Cloud DNS (Dynadot delegates NS there).
param(
  [string]$Project = "nichemash-prod-509122",
  [string]$Zone = "nichemash-com"
)

$ErrorActionPreference = "Stop"
$gcloud = "gcloud"

Write-Host "Updating apex A in Cloud DNS zone $Zone (project $Project)..."
& $gcloud dns record-sets update "nichemash.com." `
  --zone=$Zone --project=$Project --type=A --ttl=300 `
  --rrdatas="185.199.108.153,185.199.109.153,185.199.110.153,185.199.111.153"

Write-Host "Ensuring www CNAME..."
$create = & $gcloud dns record-sets create "www.nichemash.com." `
  --zone=$Zone --project=$Project --type=CNAME --ttl=300 `
  --rrdatas="bsc137.github.io." 2>&1
if ($LASTEXITCODE -ne 0) {
  if ($create -match "already exists") {
    & $gcloud dns record-sets update "www.nichemash.com." `
      --zone=$Zone --project=$Project --type=CNAME --ttl=300 `
      --rrdatas="bsc137.github.io."
  } else {
    throw $create
  }
}

Write-Host "Removing stale GCP ACME record (blocks GitHub Pages TLS) if present..."
& $gcloud dns record-sets delete "_acme-challenge.nichemash.com." `
  --zone=$Zone --project=$Project --type=CNAME --quiet 2>$null

Write-Host "Adding GitHub Pages AAAA records (optional IPv6)..."
$aaaaCreate = & $gcloud dns record-sets create "nichemash.com." `
  --zone=$Zone --project=$Project --type=AAAA --ttl=300 `
  --rrdatas="2606:50c0:8000::153,2606:50c0:8001::153,2606:50c0:8002::153,2606:50c0:8003::153" 2>&1
if ($LASTEXITCODE -ne 0 -and $aaaaCreate -notmatch "already exists") {
  Write-Host $aaaaCreate
}

Write-Host "Done. Run scripts/enable-github-pages-https.ps1 (after gh auth login), then verify https://nichemash.com"
