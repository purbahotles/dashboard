import React from 'react';
import InputGroup from "@/components/FormElements/InputGroup";
import SelectGroupOne from "@/components/FormElements/SelectGroup/SelectGroupOne";


const options = [
  { value: "Option1", label: "1" },
  { value: "Option2", label: "2" },
  { value: "Option3", label: "3" },
];
const FormAlamat: React.FC = () => {

  return (
    <>
    <div className="">
      <InputGroup label="Alamat Lengkap (Jalan, Komplek, RT/RW)" type="text" placeholder="--Isi Alamat Lengkap--" customClasses="w-full"/>
      <SelectGroupOne optionsLabel="--Pilih Provinsi--" defaultLabel="Provinsi" options={options} />
      <SelectGroupOne optionsLabel="--Pilih Kecamatan--" defaultLabel="Kecamatan" options={options} />
    </div>
    <div className="">
      <InputGroup label="Kode POS" type="text" placeholder="--Isi Kode POS--" customClasses="w-full"/>
      <SelectGroupOne optionsLabel="--Pilih Kota--" defaultLabel="Kabupaten / Kota" options={options} />
      <SelectGroupOne optionsLabel="--Pilih Kelurahan--" defaultLabel="Kelurahan" options={options} />
    </div>
    </>
  )
}

export default FormAlamat;