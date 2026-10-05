# Registers nichemash.com on GitHub Pages and requests TLS (requires: gh auth login).
$ErrorActionPreference = "Stop"

$repo = "bsc137/nichemash_public"

Write-Host "Configuring Pages custom domain and HTTPS for $repo ..."

gh api -X PUT "repos/$repo/pages" `
  -f build_type=legacy `
  -f "source[branch]=gh-pages" `
  -f "source[path]=/" `
  -f cname=nichemash.com `
  -f https_enforced=true

gh api "repos/$repo/pages" --jq '{html_url, cname, https_enforced, status}'

Write-Host @"

If https_enforced stays false, open Settings -> Pages on the repo:
  https://github.com/$repo/settings/pages
Remove and re-add custom domain nichemash.com, wait for the DNS checkmark, then turn on Enforce HTTPS.
TLS can take up to an hour after DNS is correct.
"@
