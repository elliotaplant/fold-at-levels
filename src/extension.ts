// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let currentFoldLevels: Record<string, number> = {};
	let disposable = vscode.commands.registerCommand('toggle-fold-levels.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const fileName = editor.document.fileName;

		if (currentFoldLevels[fileName] !== 2) {
			currentFoldLevels[fileName] = 2;
			const prevPosition = editor.selection.active;
			console.log('prevPosition', prevPosition);
			vscode.commands.executeCommand('editor.foldAll');
			vscode.commands.executeCommand('editor.unfoldAll');
			for (let i = 2; i <= 7; i++) {
				vscode.commands.executeCommand(`editor.foldLevel${i}`);
			}
			editor.selection = new vscode.Selection(prevPosition, prevPosition);
			console.log('editor.selections', editor.selections);
		} else {
			currentFoldLevels[fileName] = -1;
			vscode.commands.executeCommand('editor.unfoldAll');
		}
	});

	// Iterate from 1-7, register command to fold at levels
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
