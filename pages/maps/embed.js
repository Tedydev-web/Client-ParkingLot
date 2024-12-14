import { useRouter } from 'next/router';
import MapEmbed from '../../components/MapEmbed'

const EmbedPage = () => {
  const router = useRouter();
  const { mid, lat, long, z } = router.query;

  return <MapEmbed mid={mid} lat={lat} long={long} z={z} />;
};

export default EmbedPage;