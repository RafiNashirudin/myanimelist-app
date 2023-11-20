import AnimeList from '@/components/AnimeList';
import Header from '@/components/AnimeList/Header';
import { getAnimeResponse, getNestedAnimeResponse } from '@/libs/api-libs';
import { data } from 'autoprefixer';

const Page = async () => {
  const topAnime = await getAnimeResponse('top/anime', 'limit=8');
  let recommendedAnime = await getNestedAnimeResponse('recommendations/anime', 'entry');
  recommendedAnime = { data: recommendedAnime.slice(0, 8) };

  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
