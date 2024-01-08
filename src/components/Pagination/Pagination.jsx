import ReactPaginate from 'react-paginate';

export const Pagination = ({ handleClickPage, totalPages, currentPage }) => (
  <>
    <ReactPaginate
      nextLabel="&rarr;"
      onPageChange={handleClickPage}
      pageRangeDisplayed={window.innerWidth < 480 ? 4 : 5}
      marginPagesDisplayed={0}
      pageCount={totalPages}
      previousLabel="&larr;"
      pageClassName="w-[30px] h-[30px] rounded-full border border-[#f96786] flex items-center justify-center"
      pageLinkClassName="w-[30px] h-[30px] rounded-full flex items-center justify-center"
      previousClassName="mr-3 border-none"
      previousLinkClassName="w-[30px] h-[30px] rounded-full text-md text-[#f96786]  flex items-base justify-center  border border-[#f96786]"
      nextClassName="ml-3 border-none"
      nextLinkClassName="w-[30px] h-[30px] rounded-full text-md text-[#f96786]  flex items-base justify-center  border border-[#f96786]"
      containerClassName="flex gap-[5px] mx-auto mt-10 w-max"
      activeClassName="bg-[#f96786] text-white"
      renderOnZeroPageCount={null}
      disabledClassName="text-gray border border-gray"
      disabledLinkClassName="w-[30px] h-[30px] text-[#ffc5d2] border border-[#ffc5d2] cursor-default rounded-full"
      forcePage={currentPage}
    />
  </>
);
