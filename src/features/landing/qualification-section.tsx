export const QualificationSection = () => {
  return (
    <section className="tainer flex py-[15rem]">
      <div className="w-1/2">
        <h3 className="font-semibold font-manrope text-[3.6rem] max-w-[43rem]">
          Algumas das minhas qualificações.
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-x-[2.4rem]">
        {Array.from([1,2,3,4,5,6,7]).map(item => (
          <QualificationCard key={item} />
        ))}
      </div>
    </section>
  )
}

const QualificationCard = () => {
  return (
    <div className="mt-[2.4rem]">
      <img src="https://placehold.co/25x25/orange/white" alt="Qualification" />
      <p className="mt-[2.4rem] text-[2rem] text-[#3A4150] font-epilogue underline">
        <b>UX Design</b>
        <span>(Certificado pela Design Circuit)</span>
      </p>
    </div>
  )
}