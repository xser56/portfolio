interface CardProps {
    title: string;
    description: string;
  }
  
  export default function Card({ title, description }: CardProps) {
    return (
      <div className="p-6 border rounded shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  