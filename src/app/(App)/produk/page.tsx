"use client";

import React, { useState } from "react";
import produkSapi from './produkSapi.json'
import seafood from './seafood.json'
import frozenFood from './frozenFood.json'
import { ProductList } from "@/app/components/ProductList";

const Page = () => {
  return (
    <div>
      <ProductList title="Daging Sapi" products={produkSapi} />
      <ProductList title="Frozen Food" products={frozenFood} />
      <ProductList title="Seafood" products={seafood} />
    </div>
  );
};

export default Page;
