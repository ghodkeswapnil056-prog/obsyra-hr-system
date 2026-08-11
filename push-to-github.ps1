param(
  [Parameter(Mandatory=$true)]
  [string]$GitHubUsername
)

Write-Host "=================================================="
Write-Host "OBSYRA HR SYSTEM - GITHUB PAGES DEPLOYMENT HELPER"
Write-Host "=================================================="

git branch -M main
 = "https://github.com//obsyra-hr-system.git"

git remote remove origin 2>$null
git remote add origin 

Write-Host "Target Remote Repository:" 
Write-Host "Pushing main branch to GitHub..."

git push -u origin main

Write-Host "--------------------------------------------------"
Write-Host "SUCCESSFULLY PUSHED TO GITHUB!"
Write-Host "Next Step: Enable GitHub Pages in Repository Settings -> Pages"
Write-Host "Live URL will be: https://.github.io/obsyra-hr-system/"
Write-Host "=================================================="