import { getAnimeResponse } from '@/libs/api-libs';
import VideoPlayer from '@/components/Utilities/VideoPlayer';
import Image from 'next/image';

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>

      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center rounded border border-color-primary p-2">
          <h3>Skor</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center rounded border border-color-primary p-2">
          <h3>Episode</h3>
          <p>{anime.data.episodes}</p>
        </div>
        <div className="w-36 flex flex-col justify-center rounded border border-color-primary p-2">
          <h3>Durasi</h3>
          <p>{anime.data.duration}</p>
        </div>
        <div className="w-36 flex flex-col justify-center rounded border border-color-primary p-2">
          <h3>Status</h3>
          <p>{anime.data.status}</p>
        </div>
      </div>

      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap flex gap-2 text-color-primary">
        <Image src={anime.data.images.webp.image_url} alt={anime.data.images.webp.image_url} width={250} height={250} className="w-full rounded object-cover" />
        <p>{anime.data.synopsis}</p>
      </div>

      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
