interface IPages {
   pages: number[];
   totalCount: number;
   currentPage: number;
}

export function createPages( {pages, totalCount, currentPage} : IPages) {
   if (totalCount > 12) {
      if (currentPage > 5) {
         for (let i = currentPage - 4; i <= currentPage + 5; i++) {
            pages.push(i);
            if (i === totalCount) break;
         }
      } else {
         for (let i = 1; i <= 10; i++) {
            pages.push(i);
            if (i === totalCount) break;
         }
      }
   } else {
      for (let i = 1; i <= totalCount; i++) {
         pages.push(i);
      }
   }
}