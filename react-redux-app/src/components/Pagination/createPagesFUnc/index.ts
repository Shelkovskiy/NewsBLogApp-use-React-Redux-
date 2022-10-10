interface IPages {
   pages: number[];
   pageCount: number;
   currentPage: number;
}

export function createPages( {pages, pageCount, currentPage} : IPages) {
   if (pageCount > 12) {
      if (currentPage > 5) {
         for (let i = currentPage - 4; i <= currentPage + 5; i++) {
            pages.push(i);
            if (i === pageCount) break;
         }
      } else {
         for (let i = 1; i <= 10; i++) {
            pages.push(i);
            if (i === pageCount) break;
         }
      }
   } else {
      for (let i = 1; i <= pageCount; i++) {
         pages.push(i);
      }
   }
}