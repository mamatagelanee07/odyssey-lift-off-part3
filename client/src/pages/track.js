import { React } from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import TrackDetail from '../components/track-detail';

/** TRACKS gql query to retreive all tracks */
export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      title
      id
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      description
      numberOfViews
      modules {
        id
        title
        length
      }
    }
  }
`;

const Track = ({ trackId }) => {
  const { error, data, loading } = useQuery(GET_TRACK, {
    variables: {
        trackId,
    },
  });
  return (
    <Layout>
      <QueryResult error={error} data={data} loading={loading}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
