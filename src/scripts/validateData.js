const validateForm = (form) => {
    try {
        const title = form.title.value
    const year = form.year.value
    const director = form.director.value
    const duration = form.duration.value
    const genre = form.genre.value
    const rate = form.rate.value
    const poster = form.poster.value

    if (title.length < 3 || title.length > 40) {
        return false
    }

    if (isNaN(year) || year < 1888 || year > 2030) {
        return false
    }

    if (director.length === 0) {
        return false
    }

    const durationPattern = /^[0-9]h (?:[0-5]?[0-9])(m|min)$/;
    if (!durationPattern.test(duration)) {
        return false
    }

    const genrePattern = /^[a-zA-Z#]+$/;
    if (!genrePattern.test(genre)) {
        return false
    }

    if (isNaN(rate) || rate < 1 || rate > 10) {
        return false
    }

    try {
        new URL(poster);
        form.poster.setCustomValidity('');
    } catch (err) {
        return false
    }

    return true;    
    } catch (err) {
        console.log(err)
    }
    
};

module.exports = validateForm