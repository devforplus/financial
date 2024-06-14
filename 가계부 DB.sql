create table 고객 (
	고객_id       char not null,
	고객_nickname char not null,
	고객_pwd      char not null,
	고객_date     date not null,
	foreign key ( 고객_id )
		references 가계부 ( 고객_id )
)
create table 가계부 (
	고객_id  char not null,
	가계부_수입 number default :0,
	가계부_지출 number default :0,
	가계부_설명 char null,
	가계부_장소 char not null,
	가계부_날짜 date not null
)