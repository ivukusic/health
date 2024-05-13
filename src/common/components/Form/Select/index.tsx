'use client';

import { useRef } from 'react';

import clsx from 'clsx';
import { Dropdown } from 'flowbite';
import type { DropdownOptions, DropdownInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';
import Image from 'next/image';

export const Select = ({
  className,
  label,
  value,
  onChange,
  name,
  errorMessage,
  options,
  isValid,
}: any) => {
  const dropdownRef = useRef<any>();

  const onClick = () => {
    const targetEl = document.getElementById(`dropdown-${name}`);
    const triggerEl = document.getElementById(`dropdown-button-${name}`);
    const options: DropdownOptions = {
      placement: 'bottom-start',
      triggerType: 'click',
      offsetSkidding: 0,
      offsetDistance: 10,
    };
    const instanceOptions: InstanceOptions = { id: 'dropdownMenu', override: true };
    if (targetEl) {
      const dropdown: DropdownInterface = new Dropdown(
        targetEl,
        triggerEl,
        options,
        instanceOptions,
      );
      dropdownRef.current = dropdown;
      dropdown.toggle();
    }
  };

  const handleChange = (item: any) => () => {
    onChange(item);
    dropdownRef.current.toggle();
  };

  return (
    <div className={clsx('mb-3 w-full', className)}>
      <div className="relative w-full">
        <div
          id={`dropdown-button-${name}`}
          className={clsx(
            'autofill-transparent focus:ring-0; peer block h-[54px] w-full appearance-none rounded-lg border border-neutral-300 bg-transparent px-3 pb-4 pr-5 pt-5 text-[16px] text-white focus:border-primary focus:outline-none',
            { 'input-error': !!errorMessage, 'input-success': isValid },
          )}
        >
          <label
            htmlFor={name}
            dangerouslySetInnerHTML={{ __html: label }}
            className={clsx(
              'white text-md pointer-events-none absolute z-10 origin-[0] transform pl-0.5 font-normal text-white opacity-90 duration-300',
              {
                'top-1/2 -translate-y-1/2 scale-100': !value?.value,
                'top-4 -translate-y-4 scale-[0.65] px-2 text-primary': !!value?.value,
              },
            )}
          />
          {value?.label || ' '}
          <div className="absolute bottom-0 left-0 right-0 top-0" onClick={onClick} />
        </div>

        <div
          id={`dropdown-${name}`}
          className="z-50 hidden w-full max-w-[500px] divide-y divide-gray-100 rounded-lg border-[1px] border-white/20 bg-[#110B1B]"
        >
          <ul className="w-full py-4 text-[16px] text-white">
            {options.map((item: any, index: number) => (
              <li
                key={item.value}
                className={clsx('block w-full cursor-pointer px-4 py-2 hover:opacity-70', {
                  'border-t-[1px] border-white/10': index > 0,
                  'text-primary': value?.value === item.value,
                })}
                onClick={handleChange(item)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {!!errorMessage && (
        <div className="relative ml-1 mt-1.5 flex items-center">
          <Image
            alt={`${name} - error`}
            className="mr-1 h-4 w-4"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSItMiAtMyAyNCAyNCI+PHBhdGggZmlsbD0iI2M1MTgxZCIgZD0ibTEyLjggMS42MTNsNi43MDEgMTEuMTYxYy45NjMgMS42MDMuNDkgMy43MTItMS4wNTcgNC43MWEzLjIxMyAzLjIxMyAwIDAgMS0xLjc0My41MTZIMy4yOThDMS40NzcgMTggMCAxNi40NyAwIDE0LjU4MWMwLS42MzkuMTczLTEuMjY0LjQ5OC0xLjgwN0w3LjIgMS42MTNDOC4xNjIuMDEgMTAuMTk2LS40ODEgMTEuNzQzLjUxN2MuNDI4LjI3Ni43OS42NTEgMS4wNTcgMS4wOTZ6bS0yLjIyLjgzOWExLjA3NyAxLjA3NyAwIDAgMC0xLjUxNC4zNjVMMi4zNjUgMTMuOThhMS4xNyAxLjE3IDAgMCAwLS4xNjYuNjAyYzAgLjYzLjQ5MiAxLjE0IDEuMSAxLjE0SDE2LjdjLjIwNiAwIC40MDctLjA2LjU4MS0uMTcyYTEuMTY0IDEuMTY0IDAgMCAwIC4zNTMtMS41N0wxMC45MzMgMi44MTdhMS4xMiAxLjEyIDAgMCAwLS4zNTItLjM2NXpNMTAgMTRhMSAxIDAgMSAxIDAtMmExIDEgMCAwIDEgMCAyem0wLTlhMSAxIDAgMCAxIDEgMXY0YTEgMSAwIDAgMS0yIDBWNmExIDEgMCAwIDEgMS0xeiIvPjwvc3ZnPg=="
            height={10}
            width={10}
          />
          <div className="mt-0.5 text-xs text-red-600">{errorMessage || 'Error'}</div>
        </div>
      )}
    </div>
  );
};
