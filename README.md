# Sidenav-Tables.


## This is a widget for easy creation of tables and sidebar to switch visibility for them.

```html
<html>
<body>
.
..
...
<!-- create `sidenav-list` inside the sidebar like this -->
    <nav class="nav">
        <sidenav-list name="sidenav" toggle>
            <list-item for="bio">user's info</list-item>
            <list-item for="goal">step goal</list-item>
            .
            ..
            ...
            <list-item for="big-data">step goal</list-item>
        </sidenav-list>    
    </nav>
    <!--.-->
    <!--..-->
    <!--..-->
<!-- create `info-table` inside another section like this -->
        <section class="section">            
            <info-table name="bio">
                <table-caption>user's info</table-caption>
                <table-item name="full name">DATA</table-item>
                <table-item name="address">DATA</table-item>
                <table-item name="email">DATA</table-item>
            </info-table>
            
            <info-table name="goal">
                <table-caption>to-do list</table-caption>
                <table-item name="do something">DATA</table-item>
                <table-item name="do something else">DATA</table-item>
                <table-item name="do something different">DATA</table-item>
            </info-table>
            <!--.-->
            <!--..-->
            <!--...-->
                        <!-- or -->
            <info-table name="big-data">
                <table-caption>to-do list</table-caption>
                <table-item name="data">
                    <table-data>DATA</table-data>
                    <table-data>DATA</table-data>
                    <table-data>Data</table-data>
                </table-item>
                <table-item name="another data">
                    <table-data>DATA</table-data>
                    <table-data>DATA</table-data>
                    <table-data>Data</table-data>
                </table-item>
                <table-item name="yet another data">
                    <table-data>DATA</table-data>
                    <table-data>DATA</table-data>
                    <table-data>Data</table-data>
                </table-item>
                <!--.-->
                <!--..-->
                <!--...-->
            </info-table>
        </section>

        <!--.-->
        <!--..-->
        <!--...-->
<!-- add this script at the end of the body -->
<script type="text/javascript" src="https://unpkg.com/sidenav-tables@1.0.0/dist/sidenav-tables.min.js"></script>
</body>
</html>
```

### Will be received a valid BEM-style table structure with controlled navigation on the sidebar.

![screenshot](https://i2.paste.pics/H287U.png)

```html
    <nav class="nav">
        <ul class="sidenav__list">
          <li class="sidenav__item sidenav__item-bio">
              <a href="#" class="sidenav__link sidenav__link-bio">user's info</a>
          </li>
          <li class="sidenav__item sidenav__item-goals">
              <a href="#" class="sidenav__link sidenav__link-goals">planned goals</a>
          </li>
          <li class="sidenav__item sidenav__item-big-data">
              <a href="#" class="sidenav__link sidenav__link-big-data">some data</a>
          </li>
        </ul>
    </nav>
        <!--.-->
        <!--..-->
        <!--...-->
    <section class="section">
        <article class="bio">
            <table class="bio__table">
                <caption class="bio__caption">
                    <h2 class="bio__title">user's info</h2>
                </caption>
                <thead class="bio__thead">
                <tr class="bio__row bio__row-head">
                    <th class="bio__head bio__head-full-name">full name</th>
                    <th class="bio__head bio__head-address">address</th>
                    <th class="bio__head bio__head-email">email</th>
                </tr>
                </thead>
                <tbody class="bio__tbody">
                <tr class="bio__row bio__row-body">
                    <td class="bio__data bio__data-full-name">
                        <span class="bio__span">DATA</span>
                    </td>
                    <td class="bio__data bio__data-address">
                        <span class="bio__span">DATA</span>
                    </td>
                    <td class="bio__data bio__data-email">
                        <span class="bio__span">DATA</span>
                    </td>
                </tr></tbody>
            </table>
        </article>
    
        <article class="goals">
            <table class="goals__table">
                <caption class="goals__caption">
                    <h2 class="goals__title">to-do list</h2>
                </caption>
                <thead class="goals__thead">
                <tr class="goals__row goals__row-head">
                    <th class="goals__head goals__head-do-something">do something</th>
                    <th class="goals__head goals__head-do-something-else">do something else</th>
                    <th class="goals__head goals__head-do-something-different">do something different</th>
                </tr>
                </thead>
                <tbody class="goals__tbody">
                <tr class="goals__row goals__row-body">
                    <td class="goals__data goals__data-do-something">
                        <span class="goals__span">DATA</span>
                    </td>
                    <td class="goals__data goals__data-do-something-else">
                        <span class="goals__span">DATA</span>
                    </td>
                    <td class="goals__data goals__data-do-something-different">
                        <span class="goals__span">DATA</span>
                    </td>
                </tr></tbody>
            </table>
        </article>
            <!--.-->
            <!--..-->
            <!--...-->
        <article class="big-data">
            <table class="big-data__table">
                <caption class="big-data__caption">
                    <h2 class="big-data__title">data list</h2>
                </caption>
                <thead class="big-data__thead">
                <tr class="big-data__row big-data__row-head">
                    <th class="big-data__head big-data__head-data">data</th>
                    <th class="big-data__head big-data__head-another-data">another data</th>
                    <th class="big-data__head big-data__head-yet-another-data">yet another data</th>
                </tr>
                </thead>
                <tbody class="big-data__tbody">
                <tr class="big-data__row big-data__row-body-1">
                    <td class="big-data__data big-data__data-data">
                        <span class="big-data__span">DATA</span>
                    </td>
                    <td class="big-data__data big-data__data-another-data">
                        <span class="big-data__span">DATA</span>
                    </td>
                    <td class="big-data__data big-data__data-yet-another-data">
                        <span class="big-data__span">DATA</span>
                    </td>
                </tr>
                <tr class="big-data__row big-data__row-body-2">
                    <td class="big-data__data big-data__data-data">
                        <span class="big-data__span">DATA</span>
                    </td>
                    <td class="big-data__data big-data__data-another-data">
                        <span class="big-data__span">DATA</span>
                    </td>
                    <td class="big-data__data big-data__data-yet-another-data">
                        <span class="big-data__span">DATA</span>
                    </td>
                </tr>
                <tr class="big-data__row big-data__row-body-3">
                    <td class="big-data__data big-data__data-data">
                        <span class="big-data__span">Data</span>
                    </td>
                    <td class="big-data__data big-data__data-another-data">
                        <span class="big-data__span">Data</span>
                    </td>
                    <td class="big-data__data big-data__data-yet-another-data">
                        <span class="big-data__span">Data</span>
                    </td>
                </tr></tbody>
            </table>
        </article>
    </section>
```

<p>&copy; 2022 Lozitsky</p>