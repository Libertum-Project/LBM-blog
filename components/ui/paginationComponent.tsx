'use client';
import { usePathname, useSearchParams } from 'next/navigation';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';

type PaginationProps = {
  totalPages: number;
  className?: string;
};

export const PaginationComponent = ({
  totalPages,
  className
}: PaginationProps) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathName}?${params.toString()}`;
  };

  return (
    <Pagination className={className}>
      <PaginationContent>
        {prevPage >= 1 ? (
          <PaginationItem>
            <PaginationPrevious
              href={createPageURL(prevPage)}
              className="hover:bg-secondary hover:bg-opacity-80 hover:text-muted rounded"
            />
          </PaginationItem>
        ) : null}

        {Array(totalPages)
          .fill('')
          .map((_, index) => (
            <PaginationItem
              className="hidden sm:inline-block"
              key={`page ${index}`}
            >
              <PaginationLink
                href={createPageURL(index + 1)}
                isActive={currentPage === index + 1}
                className="rounded border-secondary hover:bg-secondary hover:bg-opacity-80 hover:text-muted "
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

        {nextPage <= totalPages ? (
          <PaginationItem>
            <PaginationNext
              href={createPageURL(nextPage)}
              className="hover:bg-secondary hover:bg-opacity-80 hover:text-muted rounded"
            />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
};
