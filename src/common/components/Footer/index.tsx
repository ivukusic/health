const today = new Date();

export const Footer: React.FC = () => (
  <footer className="flex items-center justify-center py-8">
    <div className="w-full text-center text-xs font-light text-white">
      &copy;{today.getFullYear()} Ivan Vukušić, All rights reserved
    </div>
  </footer>
);
