export const fetchMarks = async () => {
    const response = await fetch("https://zerda.twenkey.ru/Result/withBitArray")

    if (response.ok){
        return await response.json()
    }

    return []
}