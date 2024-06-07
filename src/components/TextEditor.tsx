import { useEffect } from 'react'; // Import useEffect
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';

const TextEditor = ({ onSubmit }: any) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Start typing...', 
        emptyEditorClass: 'is-empty',
      }),
    ],
    content: '',
    editorProps: {
      handleKeyDown(view, event) {
        if (event.key === 'Enter') {
          event.preventDefault(); // dont allow new lines
          return true;
        }
        return false;
      },
    },
  });

  useEffect(() => {
    const handleEnterKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        onSubmit(editor?.getHTML());
      }
    };

    editor?.view?.dom.addEventListener('keydown', handleEnterKeyPress);

    return () => {
      editor?.view?.dom.removeEventListener('keydown', handleEnterKeyPress);
    };
  }, [editor, onSubmit]);

  return (
    <div className="relative max-w-2xl">
      <EditorContent editor={editor} className="editor-content border p-2 rounded-lg shadow-sm" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="-3 0 32 32"
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => onSubmit(editor?.getHTML())}
      >
        <path d="M26.221 16c0-7.243-5.871-13.113-13.113-13.113S-.005 8.757-.005 16c0 7.242 5.871 13.113 13.113 13.113S26.221 23.242 26.221 16zM1.045 16c0-6.652 5.412-12.064 12.064-12.064S25.173 9.348 25.173 16s-5.411 12.064-12.064 12.064C6.457 28.064 1.045 22.652 1.045 16z"/>
        <path d="m18.746 15.204.742-.742-6.379-6.379-6.378 6.379.742.742 5.112-5.112v12.727h1.049V10.092z"/>
      </svg>
    </div>
  );
};

export default TextEditor;
