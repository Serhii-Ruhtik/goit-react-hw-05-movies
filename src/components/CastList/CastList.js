import { CastItem } from 'components/CastItem/CastItem';
import { CastCatalogue, CastCatalogueTitle } from './CastList.styled';

export function CastList({ cast }) {
  return (
    <>
      <CastCatalogueTitle>Full cast</CastCatalogueTitle>
      <CastCatalogue>
        {cast.map(({ name, character, profile_path }) => {
          return (
            <CastItem
              key={name}
              name={name}
              character={character}
              profile_path={profile_path}
            />
          );
        })}
      </CastCatalogue>
    </>
  );
}
