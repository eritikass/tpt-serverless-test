const mathjs = require('mathjs');

let handle;


module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['miksike'],
  'miksike test': function (browser) {
    browser
      .useXpath()
      .maximizeWindow()
      .url('https://6fq1iharw4.execute-api.us-east-1.amazonaws.com/dev/index.html')
      .waitForElementVisible('//*[@id="cfd"]')
      .element('xpath', '//*[@id="cfd"]', (result) => {
        browser.execute(() => {
          console.log('xd');
          let canvas = document.getElementById('cfd');
          let context = canvas.getContext('2d');
          base_image = new Image();
          // const img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAABXCAIAAABZWzqFAAAAAXNSR0IArs4c6QAAAARnQU1=";
          const img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAABXCAIAAABZWzqFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAUHSURBVHhe7do9UuswFIbhS8NQUjGUt6SkpMwMDSUlJWW2RcUSKFkGS6BkCdwz6P0yvpEix/aRgjx6KnKk6MdHUWyRP9/dr9eT1ICepAb0JDWgJ6kBPUkN6ElqQE9SA3qSGuCfpK+vr+12+/fH09PT5+cnBWtUZ7LOSbJBPzw8/Bm4urpaa55ssvf398zzx2azocyVZ5LiDAWFhn5aNtnb21tmOECxK89Gn5+fGWmEGmthGXp8fGRuA7bpUcOV2+WzcV9eXjLYCJVW4dCGYd7e3qjkyufyZcYdUG8VMhvGr75xyIw7oF778hvG771xyI87oGrjbKbJr6Ihqrpa2mhy3HHOqN2y5JZ+fn7OX0JtV0sbjTe66+tr+/7khVC7Zckt/eXlhb+E2q4WNZrc6N7f362IFxLqtys503DDzQsJ9X0tajReXLsHBV5LCDbq0JYebrh5LeEtvuY3mlxcuwcFXksINurQlh5KCUkI+prfaOZjZAgJ0QZltvSAkBB1NbPR/MfIEBKiDcqvRUNUiLqa02hyj64/9Drya9EQFaKu5jSa36MDCoRoa2w5MgHZW4uGAiHqanKjo3t0QIEQbU28HPfWoqFAiLqa1qhlKH7qjheXoUyINiW5HCkboECIuprWaLyyTLy4DGVCtCmjtwwBZULU1YRGkysrOW5DsRAtxsa23W43m43jDw1GbxkCyoSoq2MbTW50No3kuA01pPTPHIar3uX/BTZfmpMTLsdjGz1+owuoIaV/5rC36okuYJ9L2pIjlyNRV0c1OmmjCy4uLqgnFJRBH0J0rni+totQFqGGEHU13qiNOHO8eIh9dKgqFJRBH0J0rnjbiJ8xdqghRF2NNJr8KoofXWMfHx/UFgrKoA8hOkty26AshRpC1FWu0WSGTGZZDVFbiJZBH0J0liPvvHeoJERd5RpN3izkRzzEG4RoGfQhRKdLfozy2waVhKirg40mhzv6VTTEe4RoGfQhRKeb+jEy1BOirg42Gg93UoYMbxOiZdCHEJ0ouS5fX1/DT/J5PabEE2F6PjM+9THeJkTLoA8hOlFye/diaZ59GpKeT/wotxxNu7LFNGmZm8zFitelu3kP9elrV2G4O6NLbEYmRiUvVvwAXgKdTZF+T53hDmWWWKFdiNYH4gdwd7bU6GyKdJIqDDdG3xF7dqaGn+TFsgfwm5sbavzv7u7u0NMhNY5wzCFAUvrSZIZbSGaJua+Y2RcriUaFqKsijU7Ncf6qHdPa2dkZfwlvLo/+hKirgpNh1EK0jPjTRkF59CdEXa0kSZXPc4foT4i6WkmSDN0I0fLoT4i66klaiv6EqKuepKXoT4i66klaiv6EqKuVJOkr+nEPBeXRnxB1tZIkxUdHFJRHf0LU1UqSFJ8IU1Ae/QlRVytJUuVfkA3RnxB1tZIk7Z04zDtsnocuhairlSRpeL7ne346KnS6Q9TVSpJ0QkxPiLrqSVqK6QlRVz1JSzE9IeqqJ2kppidEXfUkLcX0hKirUtfuhOc0lTE9Ieqq1LU74TlNZUxPiLoqde1OeE5TGdMToq5KXTuGLDWPACpjhkLUVaUk1TwCqKnOV2+pJO2deBJdnTpfvaUu3/DEc8V7XfzrWgpclUrS7sSz8nFnZXVO31e7EdVR5/S9J6kBPUkN6ElqQE9SA3qSGtCT1ICepAb0JDWgJ6kBPUkN6ElqQE9SA3qSGtCT1ICepF/v+/sfJ7A6ETsyD64AAAAASUVORK5CYII=";
          base_image.src = img;
          base_image.onload = function () {
            context.drawImage(base_image, 0, 0);
          }
        })
      })
      // make_base();

      // function make_base() {
      // }
      .pause(3000)
      .end()
    // .pause(1000)
    // .click('/html/body/div[1]/form[2]/table/tbody/tr/td[4]/a')
    // .pause(1000)
    // .waitForElementVisible('//*[@id="Trenniväljak"]')
    // .click('//*[@id="Trenniväljak"]')
    // .pause(1000)
    // .waitForElementVisible('/html/body/div[2]/div[2]/div/table/tbody/tr[2]/td[1]/table/tbody/tr[8]/td[2]/a')
    // .click('/html/body/div[2]/div[2]/div/table/tbody/tr[2]/td[1]/table/tbody/tr[8]/td[2]/a')
    // .pause(1000)
    // .windowHandles(function (result) {
    //   // An array of window handles.
    //   handle = result;
    //   // console.log(handle.value);
    //   browser.switchWindow(handle.value[1]);
    // })
    // .click('//*[@id="btnAlusta"]')
    // .pause(500)
    // .getText('//*[@id="txtTehtav"]', function (result) {
    //   for (let x = 0; x < 40; x++) {
    //     browser
    //       .waitForElementVisible('//*[@id="txtTehtav"]')
    //       .getText('//*[@id="txtTehtav"]', function (result) {
    //         // console.log(result);
    //         let split = result.value.split('=')[0];
    //         // console.log(split);
    //         split = split.replace('x', '*');
    //         split = split.replace(':', '/');
    //         let answer = "   ";
    //         answer = mathjs.evaluate(split).toString();
    //         for (var i = 0; i < answer.length; i++) {
    //           let xPath = '//*[@id="nr' + answer.charAt(i) + '"]';
    //           // console.log(xPath)
    //           browser.click(xPath);
    //         }
    //         browser.click('//*[@id="OK"]');
    //       })
    //   }
    // })
    // .end();
  }
};