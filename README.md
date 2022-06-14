# Fold At Levels

Code folding similar to Atom, where you can fold code exactly at a particular level. Unlike atom, it does not fold code that contains your cursor

## Recommended keybindings

To match the experience of Atom, bind the keys `cmd+k cmd+<level>` for levels 1-9. 

```
{
  "key": "cmd+k cmd+1",
  "command": "fold-at-levels.foldAtLevel1",
  "when": "editorTextFocus && foldingEnabled"
},
{
  "key": "cmd+k cmd+2",
  "command": "fold-at-levels.foldAtLevel2",
  "when": "editorTextFocus && foldingEnabled"
},
...
{
  "key": "cmd+k cmd+9",
  "command": "fold-at-levels.foldAtLevel9",
  "when": "editorTextFocus && foldingEnabled"
}
```