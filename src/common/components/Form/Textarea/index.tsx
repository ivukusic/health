import clsx from 'clsx';
import Image from 'next/image';

export const Textarea = ({
  className,
  label,
  value,
  onChange,
  name,
  disabled,
  errorMessage,
  isValid,
}: any) => {
  return (
    <div className={clsx('mb-3 w-full', className)}>
      <div className="relative flex w-full flex-col">
        <textarea
          id={name}
          value={value}
          onChange={onChange}
          name={name}
          disabled={disabled}
          className={clsx(
            'autofill-transparent  focus:ring-0; peer block min-h-[140px] w-full rounded-lg border border-neutral-300 bg-transparent px-3 pb-3 pt-5 text-sm text-white focus:border-primary focus:outline-none',
            { 'input-error': !!errorMessage, 'input-success': isValid },
          )}
          placeholder={'  '}
        />

        <label
          htmlFor={name}
          dangerouslySetInnerHTML={{ __html: label }}
          className="white text-md absolute top-4 z-10 origin-[0] -translate-y-4 scale-[0.6] transform px-4 font-normal text-white opacity-90 duration-300 peer-placeholder-shown:top-1/4 peer-placeholder-shown:-translate-y-1/4 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:scale-[0.6] peer-focus:px-4"
        />
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
