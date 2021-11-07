-- CreateTable
CREATE TABLE "ExternalModule" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "ExternalModule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExternalModule_name_key" ON "ExternalModule"("name");
