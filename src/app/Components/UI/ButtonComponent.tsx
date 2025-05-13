interface ButtonProps {
    text: string;
    onClick?: () => void;
  }
  
  export default function Button({ text, onClick }: ButtonProps) {
    return (
      <button
        onClick={onClick}
        className="px-6 py-2 rounded bg-black text-white hover:bg-gray-800 transition"
      >
        {text}
      </button>
    );
  }
  