function constructionCrew(worker){
    if (worker.dizziness === true){
        worker.levelOfHydrated += worker.experience * worker.levelOfHydrated * 0.1;
        worker.dizziness = false;
    }

    return worker;
}

console.log(
    constructionCrew({ weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true })
);
