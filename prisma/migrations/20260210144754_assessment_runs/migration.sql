-- CreateTable
CREATE TABLE "AssessmentRun" (
    "id" TEXT NOT NULL,
    "assessmentId" TEXT NOT NULL,
    "actorId" TEXT NOT NULL,
    "ruleSetVersion" TEXT NOT NULL,
    "engineVersion" TEXT NOT NULL,
    "inputSnapshot" JSONB NOT NULL,
    "hits" JSONB NOT NULL,
    "outputSnapshot" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AssessmentRun_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "AssessmentRun_assessmentId_createdAt_idx" ON "AssessmentRun"("assessmentId", "createdAt");

-- CreateIndex
CREATE INDEX "AssessmentRun_actorId_idx" ON "AssessmentRun"("actorId");

-- AddForeignKey
ALTER TABLE "AssessmentRun" ADD CONSTRAINT "AssessmentRun_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "Assessment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssessmentRun" ADD CONSTRAINT "AssessmentRun_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
