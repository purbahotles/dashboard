import React from "react";
import BankCard from "@/components/Charts/BankCardOne"

const bankData = [
  {
    bankName: "Mandiri",
    title: "Bunga Special Tengah Imlek 2023",
    logo: "/images/brand/brand-01.png",
    rating: 3,
    fixRate: 3.38,
    users: 220,
    maxTenor: 12,
    target: "Karyawan, Pengusaha",
    loanToValue: 1,
    commission: 1,
    collateral: "Ruko, Rukan, Rumah, Apartemen",
  },
  {
    bankName: "Panin",
    title: "Panin KPR & KPR XTRA",
    logo: "/images/brand/brand-02.png",
    rating: 2,
    fixRate: 4.25,
    users: 350,
    maxTenor: 24,
    target: "Karyawan",
    loanToValue: 0.9,
    commission: 1.5,
    collateral: "Apartemen, Rumah",
  },
  {
    bankName: "MNC",
    title: "MNC KPR Secondary",
    logo: "/images/brand/brand-03.png",
    rating: 2,
    fixRate: 4.25,
    users: 350,
    maxTenor: 24,
    target: "Karyawan",
    loanToValue: 0.9,
    commission: 1.5,
    collateral: "Apartemen, Rumah",
  },
  {
    bankName: "Mandiri",
    title: "Bunga Special Tengah Imlek 2023",
    logo: "/images/brand/brand-03.png",
    rating: 3,
    fixRate: 3.38,
    users: 220,
    maxTenor: 12,
    target: "Karyawan, Pengusaha",
    loanToValue: 1,
    commission: 1,
    collateral: "Ruko, Rukan, Rumah, Apartemen",
  },
  {
    bankName: "Panin",
    title: "Panin KPR & KPR XTRA",
    logo: "/images/brand/brand-02.png",
    rating: 2,
    fixRate: 4.25,
    users: 350,
    maxTenor: 24,
    target: "Karyawan",
    loanToValue: 0.9,
    commission: 1.5,
    collateral: "Apartemen, Rumah",
  },
  {
    bankName: "MNC",
    title: "MNC KPR Secondary",
    logo: "/images/brand/brand-01.png",
    rating: 2,
    fixRate: 4.25,
    users: 350,
    maxTenor: 24,
    target: "Karyawan",
    loanToValue: 0.9,
    commission: 1.5,
    collateral: "Apartemen, Rumah",
  },
];


const ListProductBank = () => {
  return (
      <>
        {bankData.map((bank, index) => (
          <BankCard
            key={index}
            bankName={bank.bankName}
            title={bank.title}
            logo={bank.logo}
            rating={bank.rating}
            fixRate={bank.fixRate}
            users={bank.users}
            maxTenor={bank.maxTenor}
            target={bank.target}
            loanToValue={bank.loanToValue}
            commission={bank.commission}
            collateral={bank.collateral}
          />
        ))}
      </>
  );
};

export default ListProductBank;
