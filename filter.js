document.getElementById('searchInput').addEventListener('input', filterCourses);
document.getElementById('categoryFilter').addEventListener('change', filterCourses);

function filterCourses() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const categoryValue = document.getElementById('categoryFilter').value;
    const courses = document.querySelectorAll('.course-item');

    courses.forEach(course => {
        const courseText = course.textContent.toLowerCase();
        const courseCategory = course.getAttribute('data-category');

        if (
            (courseText.includes(searchValue) || searchValue === '') &&
            (categoryValue === 'all' || categoryValue === courseCategory)
        ) {
            course.style.display = '';
        } else {
            course.style.display = 'none';
        }
    });
}

function showDetails(courseId) {
    const details = document.getElementById(courseId);
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

function enroll(courseName) {
    alert(`You have enrolled in the ${courseName}!`);
}
 