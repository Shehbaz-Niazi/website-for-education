import Image from 'next/image';

const RatingStars = () => {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <div className="hidden sm:block -space-x-2 overflow-hidden">
        <Image
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          width={48}
          height={48}
        />
        <Image
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          width={48}
          height={48}
        />
        <Image
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
          width={48}
          height={48}
        />
        <Image
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          width={48}
          height={48}
        />
        <Image
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          width={48}
          height={48}
        />
      </div>
      <div className="border-none sm:border-l-2 border-black sm:pl-8">
        <div className="flex justify-center sm:justify-start">
          <h3 className="text-2xl font-semibold mr-2">4.6</h3>
          <Image className="w-5" src="https://www.svgrepo.com/show/513354/star.svg" alt="stars-icon" />
        </div>
        <div>
          <h3 className="text-sm">Rated by 25k on Google.</h3>
        </div>
      </div>
    </div>
  );
};

export default RatingStars;
