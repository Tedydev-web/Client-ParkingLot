import { useRouter } from 'next/router';
import MapViewer from '../../components/MapViewer';

const EmbedPage = () => {
  const router = useRouter();
  const { mid, lat, long, z } = router.query;

  return <MapViewer mid={mid} lat={lat} long={long} z={z} />;
};

export default EmbedPage;