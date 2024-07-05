# Tab Renamer Chrome Extension

This Chrome extension allows you to easily rename your browser tabs and have those names persist across page reloads and browser restarts.

## Installation and Running

Follow these steps to install and run the Tab Renamer extension in Chrome:

1. **Prepare the files**
   - Clone or install zip of the project to your local machine.
   - If you zipped, export files to somewhere.

2. **Open Chrome's Extension Management page**
   - Open Google Chrome.
   - Navigate to `chrome://extensions/`
   - Alternatively, click the Chrome menu, hover over "More Tools," then select "Extensions."

3. **Enable Developer Mode**
   - In the top right corner of the Extensions page, toggle on "Developer mode."

4. **Load the extension**
   - Click the "Load unpacked" button that appears after enabling Developer mode.
   - Navigate to the directory containing your extension files.
   - Select the directory and click "Select Folder."

5. **Verify the installation**
   - You should see the Tab Renamer extension appear in your list of installed extensions.
   - The extension icon should also appear in Chrome's toolbar.

6. **Use the extension**
   - Click on the Tab Renamer icon in the Chrome toolbar.
   - The popup should open with an input field focused and ready for typing.
   - Enter a new name for the current tab and press Enter or click "Rename."
   - The tab's name should change to your entered text.

7. **Test persistence**
   - Reload the page. The custom tab name should persist.
   - Close the tab and reopen the page by entering its URL. The custom name should still be there.
   - Note: Reopening a closed tab with Ctrl+Shift+T will not preserve the custom name, as this is a Chrome feature that restores the original page title.

## Updating the Extension

If you make changes to the extension:

1. Edit the necessary files in your project directory.
2. Return to the `chrome://extensions/` page.
3. Find the Tab Renamer extension.
4. Click the circular refresh icon on the extension's card.

## Troubleshooting

If the extension doesn't work as expected:

1. Check the console for any error messages:
   - Right-click the extension icon and select "Inspect popup."
   - Look for error messages in the Console tab.
2. Ensure all files are correctly placed and named.
3. Verify that the `manifest.json` file is correctly formatted.
4. Try disabling and re-enabling the extension.
5. If all else fails, try removing the extension and loading it again.
