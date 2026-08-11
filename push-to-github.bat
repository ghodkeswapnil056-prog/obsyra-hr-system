@echo off
echo ==================================================
echo OBSYRA HR SYSTEM - GITHUB PUSH TOOL
echo Target Account: ghodkeswapnil056-prog
echo ==================================================

git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/ghodkeswapnil056-prog/obsyra-hr-system.git

echo Pushing main branch to GitHub...
git push -u origin main

echo.
echo ==================================================
echo SUCCESS! Repository pushed to GitHub!
echo Enable Pages at: https://github.com/ghodkeswapnil056-prog/obsyra-hr-system/settings/pages
echo Live URL: https://ghodkeswapnil056-prog.github.io/obsyra-hr-system/
echo ==================================================
pause