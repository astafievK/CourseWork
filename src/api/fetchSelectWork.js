export const fetchDisciplines = async () => {
    try{
        const response = await fetch("https://zerda.twenkey.ru/Discipline")
        return response.data
    }catch (e) {
        alert(e)
    }
}