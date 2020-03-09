import * as vscode from "vscode";
let count: number = 0;

export function activate(context: vscode.ExtensionContext) {
  setTimeout(countTime, 1000);
  let activeEditor = vscode.window.activeTextEditor;
  vscode.workspace.onDidChangeTextDocument(event => {
    if (count >= 60) {
      count = 0;
      setTimeout(countTime, 1000);
    } else {
      count = 0;
    }
  });
}

let countTime = (): void => {
  count++;
  console.log(count);
  if (count >= 60) {
    callMenor();
  } else {
    setTimeout(countTime, 1000);
  }
};

let callMenor = (): void => {
  console.log("mentor!!!!");
};

// this method is called when your extension is deactivated
export function deactivate() {}
