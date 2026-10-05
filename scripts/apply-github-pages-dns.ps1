# Points nichemash.com (apex + www) at GitHub Pages for matefejes137/nichemash_public.
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
  --rrdatas="matefejes137.github.io." 2>&1
if ($LASTEXITCODE -ne 0) {
  if ($create -match "already exists") {
    & $gcloud dns record-sets update "www.nichemash.com." `
      --zone=$Zone --project=$Project --type=CNAME --ttl=300 `
      --rrdatas="matefejes137.github.io."
  } else {
    throw $create
  }
}

Write-Host "Done. Allow a few minutes for DNS propagation, then verify https://nichemash.com"
