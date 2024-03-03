import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const TextEditor: React.FC<TextEditorProps> = ({ value, setValue }) => {
  return (
    <div className="mb-16">
      <ReactQuill style={{ height: "120px"}} theme="snow" value={value} onChange={setValue} />
    </div>
  );
};

export default TextEditor;
