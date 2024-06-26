'use client'
import { usePost } from '../../-Hooks/usePost.hooks'
import { useGet } from '../../-Hooks/useGet.hooks'
import { Component } from '../../-Componets/v1.componet'

export default function ProductId (
  { params: { id }}:
  {params: { id: string  } }
)
{
  const key = process.env.API_URL
  console.log(key)
  const { dataGet:Getproduct, loading: productLoading } = useGet( key?`https://${key}/api/${id}`: `/api/${id}`); 
  const { dataPost,fetchData,loading:PostLoading } = usePost( key?`https://${key}/api/stored/`: "/api/stored");
  const { dataGet:stored, loading: GetStoredloading, GetFetchData } = useGet(key?`https://${key}/api/stored/`: "/api/stored");  

  return (
    <main className=" mt-11 grid grid-cols-8">
      <div className=" col-start-3 col-end-7">
        <section className="Product">
          {productLoading && <Component.LoadingProduct />}          
          <Component.ProdoductFind Postdata={dataPost as []} PostLoading={PostLoading} stored={stored as []} data={Getproduct} id={id} fetchData={fetchData} GetFetchData={GetFetchData} />
        </section>
        <section>                                          
        </section>
      </div>
    </main>
  )
}
