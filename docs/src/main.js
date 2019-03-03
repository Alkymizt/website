"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./lib/parser");
class Student {
    constructor(firstName, lastName, country) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.fullName = firstName + " " + lastName + " from " + country;
    }
}
function greeter(person) {
    return document.createTextNode(person.firstName + " " + person.lastName);
}
function activate(id) {
    let element = document.getElementById(id);
    element.classList.add('active');
}
function post() {
    let para = document.createElement('p');
    para.setAttribute('id', 'world');
    let node = greeter(new Student("Hello", ", World! ", "Watsonville, CA"));
    para.appendChild(node);
    document.body.appendChild(para);
    setTimeout(cb => {
        let child = document.getElementById('world');
        child.parentNode.removeChild(child);
    }, 4000);
}
function post2() {
    let para = document.createElement('h2');
    para.setAttribute('id', 'test2');
    let node = document.createTextNode("We are currently under construction...  In the meantime, checkout the ''More'' tab to see how I'm building this website:");
    para.appendChild(node);
    document.body.appendChild(para);
    setTimeout(cb => {
        let child = document.getElementById('test2');
        child.parentNode.removeChild(child);
    }, 4000);
}
function check(str) {
    return "The parenthese string is " + parser_1.isValid(str) + "!";
}
function reload() {
    location.reload();
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBdUM7QUFFdkMsTUFBTSxPQUFPO0lBR1osWUFBbUIsU0FBaUIsRUFBUyxRQUFnQixFQUFTLE9BQWU7UUFBbEUsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRyxRQUFRLEdBQUcsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUNqRSxDQUFDO0NBQ0Q7QUFPRCxTQUFTLE9BQU8sQ0FBRSxNQUFjO0lBQy9CLE9BQU8sUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUUsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLEVBQVU7SUFDM0IsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRUQsU0FBUyxJQUFJO0lBQ1osSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUNoQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDekUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDZixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUVWLENBQUM7QUFFRCxTQUFTLEtBQUs7SUFDYixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsMEhBQTBILENBQUMsQ0FBQztJQUMvSixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUNmLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQUVELFNBQVMsS0FBSyxDQUFDLEdBQVU7SUFDeEIsT0FBTywyQkFBMkIsR0FBRyxnQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUN4RCxDQUFDO0FBQ0QsU0FBUyxNQUFNO0lBQ2QsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ25CLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzVmFsaWQgfSBmcm9tICcuL2xpYi9wYXJzZXInO1xyXG5cclxuY2xhc3MgU3R1ZGVudCB7XHJcblx0ZnVsbE5hbWU6IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3IocHVibGljIGZpcnN0TmFtZTogc3RyaW5nLCBwdWJsaWMgbGFzdE5hbWU6IHN0cmluZywgcHVibGljIGNvdW50cnk6IHN0cmluZykge1xyXG5cdFx0dGhpcy5mdWxsTmFtZSA9IGZpcnN0TmFtZSArIFwiIFwiICsgbGFzdE5hbWUgKyBcIiBmcm9tIFwiICsgY291bnRyeTtcclxuXHR9XHJcbn1cclxuXHJcbmludGVyZmFjZSBQZXJzb24ge1xyXG5cdGZpcnN0TmFtZTogc3RyaW5nO1xyXG5cdGxhc3ROYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdyZWV0ZXIgKHBlcnNvbjogUGVyc29uKTogVGV4dCB7XHJcblx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBlcnNvbi5maXJzdE5hbWUgKyBcIiBcIiArIHBlcnNvbi5sYXN0TmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjdGl2YXRlKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3N0KCk6IHZvaWQge1xyXG5cdGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdHBhcmEuc2V0QXR0cmlidXRlKCdpZCcsICd3b3JsZCcpXHJcblx0bGV0IG5vZGUgPSBncmVldGVyKG5ldyBTdHVkZW50KFwiSGVsbG9cIiwgXCIsIFdvcmxkISBcIiwgXCJXYXRzb252aWxsZSwgQ0FcIikpO1xyXG5cdHBhcmEuYXBwZW5kQ2hpbGQobm9kZSk7XHJcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYXJhKTtcclxuXHRzZXRUaW1lb3V0KGNiID0+IHtcclxuXHRcdGxldCBjaGlsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3JsZCcpO1xyXG5cdFx0Y2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XHJcblx0fSwgNDAwMCk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBwb3N0MigpOiBhbnkge1xyXG5cdGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuXHRwYXJhLnNldEF0dHJpYnV0ZSgnaWQnLCd0ZXN0MicpO1xyXG5cdGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJXZSBhcmUgY3VycmVudGx5IHVuZGVyIGNvbnN0cnVjdGlvbi4uLiAgSW4gdGhlIG1lYW50aW1lLCBjaGVja291dCB0aGUgJydNb3JlJycgdGFiIHRvIHNlZSBob3cgSSdtIGJ1aWxkaW5nIHRoaXMgd2Vic2l0ZTpcIik7XHJcblx0cGFyYS5hcHBlbmRDaGlsZChub2RlKTtcclxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhcmEpO1xyXG5cdHNldFRpbWVvdXQoY2IgPT4ge1xyXG5cdFx0bGV0IGNoaWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3QyJyk7XHJcblx0XHRjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuXHR9LCA0MDAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2soc3RyOnN0cmluZykge1xyXG5cdHJldHVybiBcIlRoZSBwYXJlbnRoZXNlIHN0cmluZyBpcyBcIiArIGlzVmFsaWQoc3RyKSArIFwiIVwiXHJcbn1cclxuZnVuY3Rpb24gcmVsb2FkKCk6IHZvaWQge1xyXG5cdGxvY2F0aW9uLnJlbG9hZCgpO1xyXG59XHJcbiJdfQ==
