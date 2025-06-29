const { Plugin } = require('obsidian');

class BusinessCardScannerPlugin extends Plugin {
    async onload() {
        console.log('Business Card Scanner loaded');
    }

    onunload() {
        console.log('Business Card Scanner unloaded!');
    }
}

module.exports = BusinessCardScannerPlugin;
