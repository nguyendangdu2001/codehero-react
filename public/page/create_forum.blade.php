@extends('welcome')
@section('title',"Tạo bài viết mới")
@section('content')
<br>
<br>
<br>
<div class="container">
    <form method="post" action="{{URL::to('blog/insert-forum')}}">
        {{csrf_field()}}
        <div class="form-group">
            <label for="">Tiêu đề</label>
            <input type="text" class="form-control" name="title_forum" id="title_forum">
        </div>
        <div class="form-group">
            <label for="">Slug bài viết</label>
            <input type="text" class="form-control" name="slug_forum" id="slug_forum">
        </div>
        <input id="bgcolor" type="hidden" name="bgcolor" value="">
        <div class="form-group">
            <label>Nội dung </label>
            <textarea id="edit_post" name="content_forum"></textarea>
        </div>
        <div class="form-group">
            <label>Chủ Đề</label>
            <select class="form-control" name="cate_forum">
                @foreach($cate_forum as $key=>$value)
                <option value="{{$value['id_cate']}}">{{$value['name_cate']}}</option>
                @endforeach
            </select>
        </div>
        <button type="submit" class="btn btn-info">Đăng</button>
    </form>
    <?php
if (Session::get('success_forum')) {
	echo '<div class="alert alert-success">'.Session::get('success_forum').'</div>';
}

?>
</div>
<script>
config = {};
config.entities_latin = false;
config.language = "vi";
CKEDITOR.replace("edit_post", config);
</script>
<script type="text/javascript">
function randomColor() {
    var arrcolors = ['#f3f9f994', 'rgba(251, 250, 234, 0.7)', 'rgb(240, 245, 255)', '#F6C2F8', '#D5D0D0', '#92F8D8'];
    var color = arrcolors[Math.round(Math.random() * arrcolors.length)];
    return color;
}
$('#bgcolor').val(randomColor());
</script>
@endsection