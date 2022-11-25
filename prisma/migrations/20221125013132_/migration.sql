-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "tamanho" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
