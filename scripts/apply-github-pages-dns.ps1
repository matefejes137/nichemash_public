# Points nichemash.com (apex + www) at GitHub Pages for matefejes137/nichemash_public.
# Authoritative DNS for nichemash.com lives in Google Cloud DNS (Dynadot delegates NS there).
param(
  [string]$Project = "nichemash-prod-509122",
  [string]$Zone = "nichemash-com"
)

$ErrorActionPreference = "Stop"
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$rrsets = Join-Path $here "gcp-dns-github-pages-apex.json"
$apply = "C:\Users\Admin\nichemash\.local\dns-migrate\apply-rrsets.ps1"

if (-not (Test-Path $apply)) {
  throw "Missing $apply"
}

Write-Host "Updating apex + www in Cloud DNS zone $Zone (project $Project)..."
& $apply -Project $Project -Zone $Zone -File $rrsets
Write-Host "Done. Allow a few minutes for DNS propagation, then verify https://nichemash.com"
