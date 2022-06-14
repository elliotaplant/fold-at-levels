// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  for (let i = 1; i <= 9; i++) {
    let disposable = vscode.commands.registerCommand(
      `fold-at-levels.foldAtLevel${i}`,
      () => {
        vscode.commands.executeCommand("editor.unfoldAll");
        vscode.commands.executeCommand(`editor.foldLevel${i}`);
      }
    );

    context.subscriptions.push(disposable);
  }
}

export function deactivate() {}
