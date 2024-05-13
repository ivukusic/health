import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiMenu4Fill } from 'react-icons/ri';
import { IoIosClose } from 'react-icons/io';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Counter', href: '/counter' },
];

interface Props {
  toggleMenu: () => void;
  isMenuVisible: boolean;
}

export const Menu: React.FC<Props> = ({ isMenuVisible, toggleMenu }) => {
  const pathname = usePathname();

  const onLoginClick = () => {
    toggleMenu();
  };

  const onRegisterClick = () => {
    toggleMenu();
  };

  return (
    <>
      <button className="menu-button" onClick={toggleMenu}>
        <RiMenu4Fill color="white" size={24} />
      </button>
      <div
        className={clsx(
          'opacity-1 fixed left-0 top-0 z-[9999] flex h-screen max-h-full w-screen items-center justify-center bg-secondary text-white transition-all duration-100',
          {
            'translate-x-full': !isMenuVisible,
            'translate-x-0': isMenuVisible,
          },
        )}
      >
        <button
          className="absolute right-4 top-6 rounded-full border-[1px] border-white p-2"
          onClick={toggleMenu}
        >
          <IoIosClose color="white" size={30} />
        </button>
        <ul className="flex flex-col items-center justify-center">
          {items.map((item, index) => {
            let active = pathname?.includes(item.href);
            if (pathname && index === 0 && pathname.length > 1) {
              active = false;
            }
            return (
              <li
                key={index}
                className={clsx('relative px-3 py-1', {
                  'text-primary': active,
                })}
              >
                <Link
                  className="h-full w-full px-3 py-1 text-center text-xl font-extralight no-underline"
                  href={item.href}
                  aria-label={item.label}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="relative mt-4 px-3 py-1">
            <Link
              aria-label="Login"
              className="h-full w-full px-3 py-1 text-center text-xl font-extralight no-underline transition-all duration-300 hover:text-primary"
              href="/app/login"
              onClick={onLoginClick}
            >
              Login
            </Link>
          </li>
          <li className="relative px-3 py-1">
            <Link
              aria-label="Login"
              className="h-full w-full px-3 py-1 text-center text-xl font-extralight no-underline transition-all duration-300 hover:text-primary"
              href="/app/register"
              onClick={onRegisterClick}
            >
              Register
            </Link>
          </li>
          <li className="relative px-3 py-1"></li>
        </ul>
      </div>
    </>
  );
};
