/**
 * Created by bobtian on 16/1/25.
 */


export default function resource($resource) {
    return $resource('', {}, {
        pageQuery: {
            method: 'GET',
            url: 'https://api.yinile.com/api/roles?page=:page&size=:size',
            params: {page: '@page', size: '@size'}
        }
    });
}
resource.$inject=['$resource'];




