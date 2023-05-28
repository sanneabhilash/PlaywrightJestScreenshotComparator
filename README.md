# PlaywrightJestScreenshotComparator

This is a sample POC for performing image comparision using Playwright and Jest.

The project contains 2 tests `tests/screenshot.test.ts`:
- `Login Page Screenshot fails [${config.TEST_MODE}]`
- `Login Page Screenshot success [${config.TEST_MODE}]`

One test depicts the behavior when screen comparision fails and the other one works as expected.

There are two test mode in which one can execute these test:
- `baseline` Generates screenshots if not available
- `compare` compares current page screenshot with existing baseline image


You can configure the screenshot comparision behavior based on following:
- `Threshold` and % threshold allowed, example: `0.02`
- `Pixel` and # of pixels diff allowed, example: `100`


## Execution:
- `npm run test:baseline` - runs tests in baseline mode
- `npm run test:compare` - runs tests in compare mode

## Sample diff output:
- `/baseline/__diff_output__/pages_loginPage_fails.png`
- On successful comparision there will no diff output file generated.
