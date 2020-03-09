import * as vscode from "vscode";
let count: number = 0;

export function activate(context: vscode.ExtensionContext) {
  vscode.env.openExternal(vscode.Uri.parse("https://example.com"));
  setTimeout(countTime, 1000);
  let activeEditor = vscode.window.activeTextEditor;
  vscode.workspace.onDidChangeTextDocument(() => {
    if (count >= 60) {
      count = 0;
      setTimeout(countTime, 1000);
    } else {
      count = 0;
    }
  });
}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
</body>
</html>`;
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
  const panel = vscode.window.createWebviewPanel(
    "catCoding", // Identifies the type of the webview. Used internally
    "Cat Coding", // Title of the panel displayed to the user
    vscode.ViewColumn.One, // Editor column to show the new webview panel in.
    {} // Webview options. More on these later.
  );
  panel.webview.html = getWebviewContent();
};

// this method is called when your extension is deactivated
export function deactivate() {}
