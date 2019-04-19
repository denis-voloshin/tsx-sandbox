import { useEffect } from 'react';

export const useDocumentTitle = (title: string): void => {
  useEffect((): void => {
    document.title = title;
  })
};
