import ItemListCard from "./ItemListCard";

const ItemListContainer = () => {
  return (
    <>
      <h2 className="text-center text-2xl font-semibold m-5">
        APROVECHA NUESTROS BENEFICIOS:
      </h2>
      <div className="flex mx-auto gap-8 w-4/5 justify-between">
        <ItemListCard
          img="https://img.segmentify.com/ba8cf7a9-a32a-43dc-9676-d76c34594ae0/u/62f7bc49-793a-483d-ac8c-9fa2045f2dfa.png"
          text1="ENVÍO GRATIS"
          text2="DESDE $ 79.999"
        />
        <ItemListCard
          img="https://img.segmentify.com/ba8cf7a9-a32a-43dc-9676-d76c34594ae0/u/0fc16469-3ae7-42e1-8f13-2735f6b8695c.png"
          text1="RETIRO EN SUCURSALES ANDREANI"
          text2="EN TODO EL PAÍS"
        />
        <ItemListCard
          img="https://img.segmentify.com/ba8cf7a9-a32a-43dc-9676-d76c34594ae0/u/cf7fedf8-6923-43d9-8015-1e847b653bab.png"
          text1="DEVOLUCIÓN GRATIS"
          text2="HASTA 30 DÍAS"
        />
        <ItemListCard
          img="https://img.segmentify.com/ba8cf7a9-a32a-43dc-9676-d76c34594ae0/u/4545b827-1528-4174-ba7f-5948a318af75.png"
          text1="HASTA 3 CUOTAS SIN INTERÉS"
          text2="DESDE $69.000 VISA, MASTERCARD"
        />
        <ItemListCard
          img="https://img.segmentify.com/ba8cf7a9-a32a-43dc-9676-d76c34594ae0/u/4545b827-1528-4174-ba7f-5948a318af75.png"
          text1="HASTA 6 CUOTAS SIN INTERÉS"
          text2="DESDE $119.000 VISA, MASTERCARD"
        />
      </div>
    </>
  );
};
export default ItemListContainer;
